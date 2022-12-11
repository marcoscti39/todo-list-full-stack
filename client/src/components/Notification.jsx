import React from "react";

const Notification = ({ notificationText, notificationType }) => {
  return (
    <div>
      <p
        style={{
          color: `${notificationType === "fulfilled" ? "#12e612" : "red"}`,
        }}
      >
        {notificationText}
      </p>
    </div>
  );
};

export default Notification;
