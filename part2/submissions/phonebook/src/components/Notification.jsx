export const changeNotification = (message, setNotification) => {
  setNotification(message);
  setTimeout(() => {
    setNotification(null);
  }, 5000);
  console.log('changing notification to - ', message);
}

export const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  const condStyle = {
    color: message.toLowerCase().includes('error') ? "red" : "green"
  }

  return (
    <div className="notification" style={condStyle}>
      {message}
    </div>
  )
}
