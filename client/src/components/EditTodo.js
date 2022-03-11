import React from 'react';

const EditTodo = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-warning btn-sm me-3"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Edit
      </button>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Ttem</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              {/* <form className="d-flex mt-5" onSubmit={handleSubmit}>
                <input
                  className="form-control"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button className="btn btn-success" type="submit">
                  Edit
                </button>
              </form> */}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
