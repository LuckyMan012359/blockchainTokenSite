"use client";

import React, { FC, useState } from "react";
import { Upload, Button, Switch, Input, Radio } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";

import styled from "styled-components";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import BNBUrl from "@/assets/BNBImageUrl.png";

import Image from "next/image";
import { AiOutlineSwap } from "react-icons/ai";
import { RiUploadLine } from "react-icons/ri";
import styles from "./basicTokenInfoComponent.module.css";

const { TextArea } = Input;

interface RadioOption {
  label: string;
  value: string;
}

interface CustomRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

const CustomRadioGroup: FC<CustomRadioGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.radioGroupContainer}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${styles.radioButton} ${
            value === option.value ? styles.radioButtonActive : ""
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

const TokenForm: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // Handle the change event for file uploads
  const handleChange = (info: UploadChangeParam<UploadFile>) => {
    setFileList(info.fileList.slice(-1)); // Limit the fileList to 1 item
  };

  // Restrict upload to only image types and limit size if needed
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPngOrGif =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif";
    if (!isJpgOrPngOrGif) {
      alert("You can only upload JPG/PNG/GIF file!");
      return Upload.LIST_IGNORE;
    }
    return isJpgOrPngOrGif;
  };

  const [selectedOption, setSelectedOption] = useState<string>("fair");

  return (
    <div className="w-full flex flex-col justify-center gap-[35px] bg-gray-50 py-10 px-[450px]  max-[1720px]:px-[200px] max-[1440px]:px-[105px] max-[870px]:px-[50px] max-[768px]:px-[10px]">
      <div className="flex flex-col items-center mb-8">
        {/* Upload Component */}
        <Upload
          listType="picture-card" // Show uploaded image as a card with thumbnail
          maxCount={1} // Only one file can be uploaded
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={beforeUpload}
          onPreview={(file) => window.open(file.url || file.thumbUrl, "_blank")}
        >
          {/* Show "Upload" button if no file is uploaded, otherwise hide it */}
          {fileList.length === 0 && (
            <div>
              <RiUploadLine className="text-[58px] text-[#5A5A68]" />
            </div>
          )}
        </Upload>

        {/* Reset/Change button to change the image */}
        {fileList.length > 0 ? (
          <Button
            onClick={() => setFileList([])}
            className="mt-4"
            type="primary"
            danger
          >
            Change Image
          </Button>
        ) : (
          <div className="mt-2">
            <span className="text-[#000000]">
              <b>Upload Token Avatar</b>
            </span>
          </div>
        )}

        {/* Information about allowed file types */}
        <span className="text-sm text-gray-400 mt-2">(.png, .jpg, .gif)</span>
      </div>

      <div className="mb-8">
        <h2 className="text-lg mb-4 text-[#000000]">Basic Token Info</h2>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="flex items-center gap-[15px] max-[678px]:flex-col max-[678px]:items-start">
            <span className="text-gray-700 w-[100px] text-left mr-4 max-[678px]:w-full">
              Token Name
            </span>

            <Input className="border rounded-md p-2 flex-1" />
          </div>
          <div className="flex items-center gap-[15px] max-[678px]:flex-col max-[678px]:items-start">
            <span className="text-gray-700 w-[100px] text-left mr-4 max-[678px]:w-full">
              Token Name
            </span>

            <Input className="border rounded-md p-2 flex-1" />
          </div>
          <div className="flex items-start gap-[15px] max-[678px]:flex-col max-[678px]:items-start">
            <span className="text-gray-700 w-[100px] text-left mr-4 max-[678px]:w-full">
              Description (Optional)
            </span>

            <TextArea
              placeholder=""
              autoSize={{ minRows: 5 }}
              className="border rounded-md p-2 flex-1"
            />
          </div>
        </div>
        <button className="w-full h-[38px] rounded-[5px] bg-[#FFE958] text-black hover:bg-yellow-500">
          Add social links
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg mb-4 text-[#000000]">Token Sale Methodology</h2>
        <div className="flex mb-4">
          <CustomRadioGroup
            options={[
              { label: "Fair Bonding Curve", value: "fair" },
              { label: "Classic Bonding Curve", value: "classic" },
            ]}
            value={selectedOption}
            onChange={setSelectedOption}
          />
        </div>
        <p className="text-sm text-gray-600 mb-5">
          If this setting is enabled, upon listing and completion of the Fair
          Bonding Curve progression, a DAO is automatically created. This DAO
          governs the Treasury and comprises liquidity charges and contribution
          fees. Each token holder receives voting rights within the DAO. More
          info...
        </p>
        <p className="text-sm text-[#000000] mb-2 flex items-center text-[16px] font-[500]">
          Token Sale Duration &nbsp;
          <HiOutlineExclamationCircle />
        </p>
        <Input placeholder="DAYS 5" className="border rounded-md p-2" />
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg mb-4 text-[#000000] flex items-center">
            Advanced Settings&nbsp;
            <IoIosArrowDown />
          </h2>
          <Switch
            defaultChecked
            size="small"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <span className="text-sm text-gray-600 mb-4">
          7% Single Buyer Limit
        </span>
        <p className="text-sm text-gray-600 mb-4">
          Limit the maximum number of tokens a single buyer can purchase to 7%
          of the total supply. This setting ensures a fairer distribution of
          tokens. More info…
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg mb-4 text-[#000000]">Initial Buy</h2>
        <p className="text-sm text-[#99999999]/60 mb-4">
          Specify the number of tokens you want to purchase as a privileged
          buyer
        </p>
        <div className="flex items-center mb-4 px-[20px] justify-between">
          <div className="flex items-center gap-[10px]">
            <Image src={BNBUrl} alt="BNBUrl" />
            <p className="text-[#000000] font-[500] text-[18px]">
              BNB Insert your amount
            </p>
          </div>
          <div className="w-[22px] h-[22px] bg-[#FFE958] flex items-center justify-center">
            <AiOutlineSwap className="text-[#000000]" />
          </div>
        </div>
        <span className="text-sm text-gray-600 text-end w-full">
          <p>
            Tokens go to DAO's treasury <b>0</b>
          </p>
        </span>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-[#000000] text-[16px]">
            I agree to the GraFun Terms of Use
          </label>
        </div>
        <button className="w-full h-[38px] rounded-[5px] bg-[#FFE958] text-black hover:bg-yellow-500">
          Launch Token
        </button>
      </div>
    </div>
  );
};

export default TokenForm;
