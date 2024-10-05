import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import Image from "next/image";

import BNBImageUrl from "@/assets/BNBImageUrl.png";

interface DataType {
  key: React.Key;
  time: string;
  type: string;
  usd: number;
  token: string;
  bnb: { text: string; image: JSX.Element }; // Modified bnb type to include text and image
  address: string;
  txn: JSX.Element;
}

// SVG icon for txn column
const tsxIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M18.5625 2.75H14.4375C14.2551 2.75 14.0803 2.82243 13.9513 2.95136C13.8224 3.0803 13.75 3.25516 13.75 3.4375C13.75 3.61984 13.8224 3.7947 13.9513 3.92364C14.0803 4.05257 14.2551 4.125 14.4375 4.125H16.9039L10.5144 10.5145C10.4505 10.5781 10.3998 10.6538 10.3652 10.7371C10.3306 10.8204 10.3127 10.9098 10.3127 11C10.3127 11.0902 10.3306 11.1796 10.3652 11.2629C10.3998 11.3462 10.4505 11.4219 10.5144 11.4855C10.5781 11.5495 10.6538 11.6002 10.7371 11.6348C10.8204 11.6694 10.9097 11.6872 11 11.6872C11.0902 11.6872 11.1795 11.6694 11.2628 11.6348C11.3462 11.6002 11.4218 11.5495 11.4855 11.4855L17.875 5.09824V7.5625C17.875 7.74484 17.9474 7.9197 18.0763 8.04864C18.2053 8.17757 18.3801 8.25 18.5625 8.25C18.7448 8.25 18.9197 8.17757 19.0486 8.04864C19.1775 7.9197 19.25 7.74484 19.25 7.5625V3.4375C19.25 3.25516 19.1775 3.0803 19.0486 2.95136C18.9197 2.82243 18.7448 2.75 18.5625 2.75Z"
      fill="#333333"
    />
    <path
      d="M18.5625 10.3125C18.3802 10.3125 18.2053 10.3849 18.0764 10.5139C17.9474 10.6428 17.875 10.8177 17.875 11C17.875 12.3597 17.4718 13.689 16.7164 14.8195C15.9609 15.9501 14.8872 16.8313 13.631 17.3517C12.3747 17.872 10.9924 18.0082 9.65876 17.7429C8.32514 17.4776 7.10013 16.8228 6.13864 15.8614C5.17716 14.8999 4.52238 13.6749 4.2571 12.3412C3.99183 11.0076 4.12798 9.62529 4.64833 8.36905C5.16868 7.11281 6.04987 6.03908 7.18046 5.28365C8.31105 4.52821 9.64026 4.125 11 4.125C11.1823 4.125 11.3572 4.05257 11.4861 3.92364C11.6151 3.7947 11.6875 3.61984 11.6875 3.4375C11.6875 3.25516 11.6151 3.0803 11.4861 2.95136C11.3572 2.82243 11.1823 2.75 11 2.75C9.36831 2.75 7.77326 3.23385 6.41655 4.14038C5.05984 5.0469 4.00242 6.33537 3.378 7.84286C2.75357 9.35035 2.5902 11.0092 2.90853 12.6095C3.22685 14.2098 4.01259 15.6798 5.16637 16.8336C6.32016 17.9874 7.79017 18.7732 9.39051 19.0915C10.9909 19.4098 12.6497 19.2464 14.1571 18.622C15.6646 17.9976 16.9531 16.9402 17.8596 15.5835C18.7661 14.2268 19.25 12.6317 19.25 11C19.25 10.8177 19.1776 10.6428 19.0486 10.5139C18.9197 10.3849 18.7448 10.3125 18.5625 10.3125Z"
      fill="#333333"
    />
  </svg>
);

// Image to be shown in the BNB column
const bnbImage = (
  <Image
    src={BNBImageUrl} // Replace with the actual URL of the image you want to show
    alt="bnb"
    width={12}
    height={12}
    style={{ marginRight: "3px" }} // Adjusted to ensure image and text are inline
  />
);

const columns: TableColumnsType<DataType> = [
  {
    title: "Time",
    dataIndex: "time",
    sorter: {
      compare: (a, b) => a.time.localeCompare(b.time), // Proper string comparison
    },
  },
  {
    title: "Type",
    dataIndex: "type",
    sorter: {
      compare: (a, b) => a.type.localeCompare(b.type), // Proper string comparison
    },
    render: (type: string) => <span style={{ color: "#17CD1D" }}>{type}</span>,
  },
  {
    title: "USD",
    dataIndex: "usd",
    sorter: {
      compare: (a, b) => a.usd - b.usd, // Numeric comparison
    },
  },
  {
    title: "Token",
    dataIndex: "token",
    sorter: {
      compare: (a, b) => parseFloat(a.token) - parseFloat(b.token), // Convert strings to numbers for comparison
    },
  },
  {
    title: "BNB",
    dataIndex: "bnb",
    sorter: {
      compare: (a, b) => parseFloat(a.bnb.text) - parseFloat(b.bnb.text), // Use text value for sorting
    },
    render: (bnb) => (
      <span style={{ display: "inline-flex", alignItems: "center" }}>
        {bnb.image} {bnb.text}{" "}
        {/* Display image and text together in inline-flex */}
      </span>
    ),
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Txn",
    dataIndex: "txn",
    render: () => tsxIcon, // Render the SVG icon in the cell
  },
];

const data: DataType[] = [
  {
    key: "1",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "2",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "3",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "4",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "5",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "6",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "7",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "8",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "9",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "10",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "11",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "12",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
  {
    key: "13",
    time: "1 min ago",
    type: "Buy",
    usd: 0.589,
    token: "127.8K",
    bnb: { text: "127.8K", image: bnbImage }, // Use object with text and image
    address: "0xbfe...e2c",
    txn: tsxIcon, // Use the JSX icon directly
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TokenDeployTable: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
);

export default TokenDeployTable;
