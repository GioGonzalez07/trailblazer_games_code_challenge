import React, { FC } from "react";
import { Spinner } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

interface FetchStatusProps {
  fetchStatus: string | null;
}

const FetchStatus: FC<FetchStatusProps> = ({ fetchStatus }) => {
  switch (fetchStatus) {
    case "loading":
      return (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      );
    case "success":
      return (
        <p>
          <FaCheckCircle style={{ marginRight: "5px" }} />
          URL fetched successfully{" "}
        </p>
      );
    case "invalid-url":
      return (
        <p>
          <IoIosWarning style={{ marginRight: "5px" }} />
          Invalid URL
        </p>
      );
    case "error":
      return (
        <p>
          <MdError style={{ marginRight: "5px" }} />
          Error when fetching URL
        </p>
      );
    default:
      return null; // Default case to handle other values of fetchStatus
  }
};

export default FetchStatus;
