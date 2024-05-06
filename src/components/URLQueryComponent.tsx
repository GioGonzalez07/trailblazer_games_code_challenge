import React, { useState, FormEvent, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import FetchStatus from "./FetchStatus";

const URLQueryComponent: React.FC = () => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState<string>("GET"); // Default to GET method
  const [fetchStatus, setFetchStatus] = useState<string | null>(null);

  const divStyle = {
    width: "600px",
    padding: "2rem",
    marginTop: "2rem",
    border: "3px solid #1D0411", // Set initial border
    borderImage: "linear-gradient(to right, #1D0411, #862458)", // Horizontal gradient from black to purple
    borderImageSlice: "1", // Ensure the gradient fills the entire border
  };

  const buttonStyle = {
    backgroundColor: "#862458",
    padding: "0.5rem 2rem",
    borderRadius: "0.5rem",
    border: "none",
  };

  const statusStyle = {
    marginTop: "2rem",
    minHeight: "100px", // Set a fixed height
  };

  const handleFetch = async () => {
    setFetchStatus("loading");
    try {
      const response = await fetch(url,
        { method }
      );
      if (response.status.toString().startsWith('2')) {
        setFetchStatus("success");
      } else if (
        response.status.toString().startsWith("4") ||
        response.status.toString().startsWith("5")
      ) {
        setFetchStatus("error");
      }
    } catch (error) {
      setFetchStatus("error");
    }
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleInputClick = () => {
    setFetchStatus(null);
    setUrl("");
  };

  return (
    <div style={divStyle}>
      <Form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (isValidUrl(url)) {
            handleFetch();
          } else {
            setFetchStatus("invalid-url");
          }
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>URL:</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter the URL you want to check:  https://..."
            value={url}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
            onClick={handleInputClick}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>HTTP Method:</Form.Label>
          <Form.Select
            value={method}
            onChange={(e: any) => setMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </Form.Select>
        </Form.Group>
        <Button
          style={buttonStyle}
          bsPrefix="custom-btn"
          variant="Primary"
          type="submit"
        >
          Search
        </Button>
      </Form>
      <div style={statusStyle}>
        <u>Response: </u>
        <FetchStatus fetchStatus={fetchStatus} />
      </div>
    </div>
  );
};

export default URLQueryComponent;
