import { useState } from "react";
import { Button, Dropdown, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { addToDo } from "../store/todo.slice";

const AddToDo = ({ isEdit = false, data, setData }) => {
  const [task, setTask] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const handleSave = () => {
    console.log(task, description, "checking", status);
    dispatch(addToDo({ task, description, status }));
  };
  const valueChange = (value) => {
    console.log(value);
    setStatus(value);
    setData((prev) => {
      return { ...prev, status: value };
    });
  };
  return (
    <Form
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 10,
      }}
      style={{
        maxWidth: 700,
      }}
    >
      <Form.Item label="Task" name="task">
        <Input
          defaultValue={isEdit && data.task}
          size="middle"
          placeholder="Enter Task"
          onChange={(e) => {
            console.log(e.target.value, "value");
            setTask(e.target.value);
            setData((prev) => {
              return { ...prev, task: e.target.value };
            });
          }}
        />
      </Form.Item>
      <Form.Item label="Task Description" name="description">
        <Input
          defaultValue={isEdit && data.description}
          placeholder="Enter Task Description"
          onChange={(e) => {
            setDescription(e.target.value);
            setData((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
        />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Select
          defaultValue={isEdit && data.status}
          style={{
            width: 120,
          }}
          options={[
            { value: "Completed", key: "completed" },
            { value: "Not Started", key: "notStarted" },
            { value: "In Progress", key: "inProgress" },
          ]}
          onChange={valueChange}
        />
      </Form.Item>
      {!isEdit && (
        <Form.Item label={null}>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};
export default AddToDo;
