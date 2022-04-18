import { Modal } from "react-bootstrap";
function ModalView({ hideModal, isShown, data, isKing }) {
  console.log("isKing", isKing);
  return (
    <Modal
      show={isShown}
      onHide={hideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <div className="row p-0 m-0 ">
          <div
            className="col-2 m-auto position-absolute p-2"
            style={{ zIndex: 1, display: isKing ? "block" : "none" }}
          >
            <img width="100%" src="/crown.png"></img>
          </div>
          <div
            className="imageTop col-12 p-0 m-0 animated fadeIn"
            style={{
              height: "60vh",
              background: `url(/competitorImages/${
                data.imageHref ? data.imageHref : "default.png"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div
            className="name col-12 text-center m-4 animated fadeInLeft"
            style={{ fontSize: "30pt" }}
          >
            {data.name}
          </div>
          <div
            className="col-11 animated fadeIn"
            style={{
              margin: "auto",
              borderBottom: "2px solid #3a404d",
              color: "#3a404d",
            }}
          ></div>
          <div className="data row col-12 m-4" style={{ fontSize: "12pt" }}>
            <div
              className="col-6 text-center p-2 animated fadeInLeft"
              style={{ animationDelay: "1.5s" }}
            >
              <i> IME: </i>
              <br></br>

              <b>{data.first_name}</b>
            </div>
            <div className="col-6 text-center p-2 animated fadeInLeft">
              <i>ПРЕЗИМЕ: </i>
              <br></br>

              <b>{data.last_name}</b>
            </div>
            <div
              className="col-6 text-center p-2 animated fadeInLeft"
              style={{ animationDelay: "2s" }}
            >
              <i>ПОЛ: </i>
              <br></br>

              <b>{data.gender}</b>
            </div>
            <div
              className="col-6 text-center p-2 animated fadeInLeft"
              style={{ animationDelay: ".5s" }}
            >
              <i> КИЛАЖА:</i>
              <br></br>
              <b>
                {data.weight}
                кг
              </b>
            </div>
            <div
              className="col-6 text-center p-2 animated fadeInLeft"
              style={{ animationDelay: "2.5s" }}
            >
              <i> КАТЕГОРИЈА: </i>
              <br></br>

              <b>{data.category}</b>
            </div>
            <div
              className="col-6 text-center p-2 animated fadeInLeft"
              style={{ animationDelay: "1s" }}
            >
              <i>СТАРОСТ:</i>
              <br></br>

              <b>
                {data.age}
                год.
              </b>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalView;
