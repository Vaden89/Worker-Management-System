import React, { useState, useEffect } from "react";
import { Divider, Input, Table, Dropdown, Space, Button, Form } from "antd";
import { SettingFilled, EditFilled, DeleteFilled } from "@ant-design/icons";
import { WorkerService } from "../services/worker.service";
import { EditWorker } from "./Modals";

const { Search } = Input;

export const ViewWorkers = () => {
  const [workers, setWorkers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [editForm] = Form.useForm();

  useEffect(() => {
    const getWorkers = async () => {
      try {
        const data = await WorkerService.getAllWorkers();
        console.log(data);
        setWorkers(data);
      } catch (error) {
        console.error("Failed to fetch workers:", error);
      }
    };

    getWorkers();
  }, [selectedUser]);

  let filteredWorkers = [...workers];

  if (searchField !== "") {
    filteredWorkers = workers.filter((workers) => {
      let fullName = workers.firstName + " " + workers.lastName;
      return fullName?.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  const closeEditModal = () => {
    editForm.resetFields();
    setSelectedUser(undefined);
    setEditModal(false);
  };

  const handleEdit = () => {
    setEditModal(true);
    editForm.setFieldsValue({
      firstName: selectedUser?.firstName,
      lastName: selectedUser?.lastName,
    });
  };

  const items = [
    {
      key: "1",
      label: <span>Edit</span>,
      onClick: () => handleEdit(),
      icon: <EditFilled />,
    },
    {
      key: "2",
      label: <span>Delete</span>,
      onClick: () => console.log("deleteee"),
      icon: <DeleteFilled />,
      danger: true,
    },
  ];

  const columns = [
    {
      title: "Full Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (firstName, { lastName }) => <p>{firstName + " " + lastName} </p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "IBAN",
      dataIndex: "iban",
      key: "iban",
    },
    {
      title: "Street",
      dataIndex: "street",
      key: "street",
    },
    {
      title: "Lvl2",
      dataIndex: "lvl2",
      key: "lvl2",
    },
    {
      title: "Lvl3",
      dataIndex: "lvl3",
      key: "lvl3",
    },
    {
      title: "Supervisor",
      dataIndex: "supervisor",
      key: "supervisor",
      render: (text) => (
        <span>
          {filteredWorkers?.map((worker) => {
            return worker._id === text
              ? worker.firstName + " " + worker.lastName
              : "";
          })}
        </span>
      ),
    },
    {
      title: "Super Commission",
      dataIndex: "superCommission",
      key: "superCommission",
      render: (bool) => <span>{bool === true ? "YES" : "NO"}</span>,
    },
    {
      title: "Brought by",
      dataIndex: "broughtByLvl1",
      key: "broughtByLvl1",
      render: (text) => (
        <span>
          {text === null
            ? "Nobody"
            : filteredWorkers?.map((worker) => {
                return worker._id === text
                  ? worker.firstName + " " + worker.lastName
                  : "";
              })}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, data) => (
        <Dropdown menu={{ items }}>
          <Button onClick={() => setSelectedUser(data)}>
            <Space style={{ color: "#555" }}>
              manage
              <SettingFilled />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <label htmlFor="search">Search Worker by name:</label>
      <br />
      <Search
        name="search"
        placeholder="input name"
        onSearch={onSearch}
        onChange={(e) => setSearchField(e.target.value)}
        enterButton
        style={{
          maxWidth: 300,
          minWidth: 200,
        }}
      />
      <Divider />
      <Table
        size="small"
        scroll={{
          x: 1300,
        }}
        bordered
        columns={columns}
        dataSource={filteredWorkers}
        rowKey={(filteredWorkers) => filteredWorkers._id}
        pagination={{
          defaultCurrent: 1,
          total: filteredWorkers.length,
          pageSize: 5,
        }}
      />
      <EditWorker
        open={editModal}
        onCancel={closeEditModal}
        selectedUser={selectedUser}
        editForm={editForm}
      />
    </div>
  );
};
