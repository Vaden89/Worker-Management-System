import React, { useState, useEffect } from "react";
import { Divider, Input, Table, Select } from "antd";
import { WorkerService } from "../services/worker.service";

const { Search } = Input;

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
    render: (bool) => <span>{bool === true ? "YES" : "NO"}</span>,
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
    render: (value) => <span>{value === null ? "Nobody" : value}</span>,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => (
      <Select
        onClick={(e) => e.stopPropagation()}
        placeholder="manage"
        options={[
          { label: "Edit", value: "edit" },
          { label: "Delete", value: "delete" },
        ]}
        style={{ color: "#1677ff", width: 100 }}
      >
        manage
      </Select>
    ),
  },
];

export const ViewWorkers = () => {
  const [workers, setWorkers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  useEffect(() => {
    const getWorkers = async () => {
      try {
        const data = await WorkerService.getAllWorkers();
        setWorkers(data);
      } catch (error) {
        console.error("Failed to fetch workers:", error);
      }
    };

    getWorkers();
  }, []);

  let filteredWorkers = [...workers];

  if (searchField !== "") {
    filteredWorkers = workers.filter((workers) => {
      let fullName = workers.firstName + " " + workers.lastName;
      return fullName?.toLowerCase().includes(searchField.toLowerCase());
    });
  }

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
    </div>
  );
};
