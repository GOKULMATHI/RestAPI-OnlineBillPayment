// contactActions.js

export const sendMessage = (contactData) => {
    // Perform any necessary actions, such as making an API request or updating the Redux store
    // You can dispatch an action to update the store if needed
    return {
      type: 'SEND_MESSAGE',
      payload: contactData,
    };
  };