import styled from "@emotion/styled";

export const StyledIndex = styled("div")`
  border-right: 2px solid black;
  .title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }
  .body-content {
    padding-top: 40px;
    padding: 40px 50px;
    .content {
      border: 1px solid black;
      padding: 14px;
      display: flex;
      .title-content {
        vertical-align: middle;
        font-size: 20px;
      }
      .group-btn {
        margin-left: auto;
        .btn-detail {
          background: #00bcd4;
          padding: 5px 34px;
        }
        .btn-remove {
          background: #d9534f;
          padding: 5px 24px;
        }
        .MuiButton-root {
          text-transform: initial !important;
        }
      }
    }

    .body-form {
      margin-top: 0xp !important;
      border-right: 1px solid black;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
      padding: 30px;
      .width-textarea {
        width: 99%;
      }
      .text-label {
        font-weight: bold;
      }
      .mt-5 {
        margin-top: 5px;
      }
    }
  }
  .bulk-action {
    margin-top: 80px;
    padding: 20px 10px;
    display: flex;
    background: #e0e0e0;
    border: 1px solid black;
    .group-btn {
      margin-left: auto;
      .btn-done {
        background: #2196f3;
        padding: 8px 40px;
      }
      .btn-remove {
        background: #d9534f;
        padding: 8px 38px;
      }
      .MuiButton-root {
        text-transform: initial !important;
      }
    }
  }
`;
