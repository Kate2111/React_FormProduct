import React, { useEffect, useState } from "react";
import { IGroup } from "@/types/form";
import Group from "@/components/Group";
import { useFetching } from "@/hooks/useFetching";
import Button from "@/components/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProductGroupState, addGroup } from "@/store/slice/productSlice";

const MyForm: React.FC = () => {
  useFetching();
  const dispatch = useDispatch();
  const { productGroup } = useSelector(ProductGroupState);
  const [tabIndex, setTabIndex] = useState<number>(1);
  const [totalTabs, setTotalTabs] = useState<number>(1);

  const addGroupHandler = () => {
    const newGroup: IGroup = {
      id: Date.now().toString(),
      sum: 0,
      products: [],
    };
    dispatch(addGroup(newGroup));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(JSON.stringify(productGroup, null, 2));
  };

  useEffect(() => {
    const channel = new BroadcastChannel("form_sync_channel");

    channel.onmessage = (event) => {
      dispatch(event.data);
    };

    return () => {
      channel.close();
    };
  }, [dispatch]);

  useEffect(() => {
    const tabId = Date.now() + Math.random().toString();
    const channel = new BroadcastChannel("tab_sync_channel");

    channel.postMessage({ type: "newTab", tabId });

    channel.onmessage = (event) => {
      if (event.data.type === "updateTabs") {
        setTotalTabs(event.data.totalTabs);
        setTabIndex(event.data.tabs.indexOf(tabId) + 1);
      }
    };

    channel.postMessage({ type: "requestUpdate", tabId });

    return () => {
      channel.postMessage({ type: "closeTab", tabId });
      channel.close();
    };
  }, []);

  return (
    <>
      <div>
        Вкладка {tabIndex} из {totalTabs}
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-[1px] border-current rounded-s mt-4 p-5"
      >
        {productGroup.map((group) => (
          <Group key={group.id} idGroup={group.id} products={group.products} />
        ))}
        <Button onClick={addGroupHandler}> Добавить группу</Button>

        <Button type="submit">Отправить</Button>
      </form>
    </>
  );
};

export default MyForm;
