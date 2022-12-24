import React, { useState, useCallback } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { useDropzone } from "react-dropzone";
import "./enews.css";

const AddENews = (addENewsModal, handleCloseNewsModal) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pdffile, setPDFFile] = useState([]);

  const handleCallback = (files) => {
    if (files.length <= 0) {
      setIsError(true);
      setErrorMessage("Please enter valid file");
    }
    files.map((file) => {
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      const pdf = document.createElement("pdf");
      pdf.setAttribute("controls", "controls");
      pdf.style.display = "none";
      const source = document.createElement("source");
      source.src = file.preview;
      source.type = file.type;
      pdf.appendChild(source);
      //   audio.addEventListener("loadedmetadata", () => {
      //     const minutes = Math.floor(audio.duration / 60);
      //     const seconds = Math.floor(audio.duration % 60);
      //     setDuration({
      //       minutes,
      //       seconds,
      //     });

      //     if (minutes) {
      //       if (minutes > 3) {
      //         setIsError(true);
      //         setErrorMessage(
      //           "Audio length must be greater than 15 seconds and less than 3 minutes"
      //         );
      //       }
      //     } else if (seconds < 15) {
      //       setIsError(true);
      //       setErrorMessage(
      //         "Audio length must be greater than 15 seconds and less than 3 minutes"
      //       );
      //     } else {
      //       setIsError(false);
      //       setErrorMessage("");
      //     }
      //   });
      document.body.appendChild(pdf);
    });
    if (!files) return;
  };

  const onDrop = useCallback(
    async (acceptedFiles) => {
      handleCallback(acceptedFiles);
      setPDFFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },

    //eslint-disable-next-line
    [pdffile]
  );

  const removeFile = (file) => {
    const newFiles = [...pdffile];
    newFiles.splice(file, 1);
    setPDFFile(newFiles);
    setIsError(false);
  };

  const thumbs = pdffile.map((file, index) => (
    <div className="thumb mr-3" key={file.name}>
      <div className="thumbInner">
        {/* <audio controls controlsList="nodownload noplaybackrate"> */}
        <embed src={file.preview} width={100} height={100}></embed>
        {/* </audio> */}
      </div>
      <button
        type="button"
        className="thumbButton"
        onClick={() => removeFile(index)}
      >
        Remove
      </button>
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop,
    multiple: false,
    // minSize: 0,
    // maxSize: 84,
  });

  return (
    <React.Fragment>
      <Modal
        isOpen={addENewsModal}
        centered={true}
        // style={{ maxWidth: "65%", width: "50%" }}
      >
        <ModalHeader toggle={handleCloseNewsModal}> Add E-News</ModalHeader>
        <ModalBody>
          <div className="drop-zone-container">
            <section>
              <div
                {...getRootProps({
                  //   className: "dropzone",
                })}
              >
                <input {...getInputProps()} />
                <p className="text-center" style={{ paddingTop: "80px" }}>
                  Drag `n` drop some files here, or click to select files
                </p>
              </div>
              <aside className="thumbsContainer">{thumbs}</aside>
              {/* {audiofile.length > 6 && (
                                <div
                                  style={{ fontSize: 14 }}
                                  className="text-left text-danger"
                                >
                                  {"Please enter only 6 ringtones"}
                                </div>
                              )} */}
            </section>
            {isError ? (
              <div
                style={{ fontSize: 14 }}
                className="text-left mt-1 text-danger"
              >
                {errorMessage !== "" ? errorMessage : null}
              </div>
            ) : null}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" name="btn">
            Create
          </Button>
          <Button
            type="button"
            name="btn"
            color="danger"
            onClick={handleCloseNewsModal}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default AddENews;
