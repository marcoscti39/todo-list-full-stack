import { useEffect, useState } from "react";

export const useNotification = () => {
  const [notificationStatus, setNotificationStatus] = useState({
    notificationText: "",
    notificationType: "fulfilled",
    isNotificationShowing: false,
  });

  const isNotificationShowing = notificationStatus.isNotificationShowing;
  const notificationData = notificationStatus;

  useEffect(() => {
    if (notificationStatus.isNotificationShowing) {
      setTimeout(() => {
        setNotificationStatus({
          ...notificationStatus,
          isNotificationShowing: false,
        });
      }, 1000);
    }
  }, [notificationStatus.isNotificationShowing]);

  const activateNotification = (notificationText, notificationType) => {
    setNotificationStatus({
      notificationText,
      notificationType,
      isNotificationShowing: true,
    });
  };

  return { activateNotification, notificationData, isNotificationShowing };
};
