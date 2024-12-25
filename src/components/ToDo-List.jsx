import { Card, Flex, Modal, Tabs } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit, FormTrash } from "grommet-icons";
import { deleteToDo, editToDo } from "../store/todo.slice";
import AddToDo from "./Add-Todo";

const ToDoList = () => {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState(todos);
  const handleDelete = (id) => {
    console.log("Deleting ---");
    dispatch(deleteToDo(id));
  };
  const handleEdit = (todo) => {
    console.log("Editing --");
    setIsEdit(true);
    setData(todo);
  };
  const items = [
    { key: 1, label: "All" },
    { key: 2, label: "Not Started" },
    { key: 3, label: "In Progress" },
    { key: 4, label: "Completed" },
  ];
  const handleTabChange = (key) => {
    if (key === 1) {
      setFilteredData(todos);
    } else if (key === 2) {
      setFilteredData(todos.filter((todo) => todo.status === "Not Started"));
    } else if (key === 3) {
      setFilteredData(todos.filter((todo) => todo.status === "In Progress"));
    } else if (key === 4)
      setFilteredData(todos.filter((todo) => todo.status === "Completed"));
  };
  return (
    <>
      <Tabs items={items} defaultActiveKey={1} onChange={handleTabChange}>
        {" "}
      </Tabs>

      <Flex style={{ marginTop: "30px" }}>
        {filteredData?.map((todo) => {
          return (
            <Card
              title={
                <Flex justify="space-between" style={{ cursor: "pointer" }}>
                  {todo.task}
                  <Edit onClick={() => handleEdit(todo)} />
                  <FormTrash onClick={() => handleDelete(todo.id)} />
                </Flex>
              }
              style={{
                width: 500,
                margin: "10px",
              }}
            >
              Description : {todo.description}
              Status : {todo.status}
            </Card>
          );
        })}
      </Flex>
      {isEdit && (
        <Modal
          title="Edit Modal"
          open={isEdit}
          onOk={() => {
            console.log("data ---", data);
            dispatch(editToDo(data));
            setIsEdit(false);
          }}
          onCancel={() => setIsEdit(false)}
          okText={"SAVE"}
        >
          <AddToDo isEdit={true} data={data} setData={setData} />
        </Modal>
      )}
    </>
  );
};
export default ToDoList;
