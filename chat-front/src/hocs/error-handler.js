import React, { useEffect } from "react";
import { notification } from "antd";
import { connect } from "react-redux";
import { clearErrors } from "actions/error";

function ErrorHandler({ children, errors, clearErrors }) {
  useEffect(() => {
      if(errors.length > 0) {
        errors.forEach(e => notification.error({ ...e, duration: 10 }));
        clearErrors();
      }
  }, [errors]);

  return <>{children}</>;
}

const mapDispatchToProps = {clearErrors};

const mapStateToProps = ({ errorReducer }) => {
  return { errors: errorReducer.errors };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler);
