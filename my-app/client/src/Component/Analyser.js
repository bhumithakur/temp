import React from 'react';
import { Helmet } from 'react-helmet';

<Helmet>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.3/dist/tf.min.js"></script>
  <script src="jscript/met_cancer_classes.js"></script>
  <script src="jscript/breast_cancer_classes.js"></script>
  <script src="jscript/app_startup_code.js"></script>
  <script src="jscript/met_cancer_analyzer.js"></script>
  <script src="jscript/breast_cancer_analyzer.js"></script>
</Helmet>

const Analyser = () => {

return (
<>
  {/* Hello world */}
  <section className="section" id="about2">
    <div className="container flex">
      <div className="row">
        <div className="left-text col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix">
          <div className="left-heading">
            <h5 style={{ color: "#ff58c9" }}>Breast Cancer Analyzer</h5>
          </div>
          <p>for Histopathology Image Patches, To use the tool:</p>
          <ul>
            <li>
              <img src="assets/images/icon.png" alt="" />
              <div className="text">
                <h6>Upload Histopathological Image</h6>
                <p>
                  Click on the 'Choose Files' button and select a single image
                  of 200x200 for the algorithm. Use jpeg, jpg or png format.
                </p>
              </div>
            </li>
            <li>
              <img src="assets/images/icon.png" alt="" />
              <div className="text">
                <h6>Select Prediction Type</h6>
                <p>
                  One of these shall be selected for you by default, you may
                  choose between <strong>Metastatic Cancer</strong> and
                  <strong>Invasive Ductal Carcinoma</strong>
                </p>
              </div>
            </li>
            <li>
              <img src="assets/images/icon.png" alt="" />
              <div className="text">
                <h6>Check Results</h6>
                <p>
                  Your results should load automatically, just in case it
                  doesn't click on Predict.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="right-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
          data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
        >
          <div className="w3-center">
            <img
              id="selected-image"
              className="w3-round adjust-image"
              width={200}
              src="assets/normal.png"
              alt=""
            />
          </div>
          <div className="w3-center">
            <div className="progress-bar">Ai is Loading...</div>
          </div>
          <div className="dont-break-out w3-center add-padding w3-border add-margin side-margin w3-round w3-pale-blue">
            <h5 className="new-font">Results</h5>
            <ol className="w3-left-align" id="prediction-list" />
          </div>
          <div className="add-padding w3-border add-margin side-margin w3-round w3-padding w3-text-teal">
            <p>What would you like to detect?</p>
            <input
              id="met_cancer_input"
              className="w3-margin-right w3-margin-bottom"
              type="radio"
              name="model_type"
              defaultValue="metastatic_cancer"
              defaultChecked=""
            />
            Metastatic Cancer
            <br />
            <input
              id="breast_cancer_input"
              className="w3-margin-right w3-margin-bottom"
              type="radio"
              name="model_type"
              defaultValue="breast_cancer"
            />
            Invasive Ductal Carcinoma
            <br />
          </div>
          <p className="w3-text-teal">jpeg or png</p>
          <div style={{ display: "flex" }}>
            <div className="hide">
              <input id="image-selector" type="file" multiple="" />
            </div>
            <div className="hide ">
              <button
                className="main-button"
                style={{ background: "#0088e8" }}
                id="predict-button"
              >
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

);
};
export default Analyser;