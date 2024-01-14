import React from 'react';

const Expense = ({ expense, users }) => {
  const { id, description, amount, type, payer, participants } = expense;
  console.log("participants",participants)


  const getPayerName = () => {
    const payerUser = users.find((user) => user && user.id === payer);
    return payerUser ? payerUser.name : '';
  };
  



//   const getParticipantNames = () => {
//     if (Array.isArray(participants)) {
//       return participants.map((participantId) => {
//         const participantUser = users.find((user) => user.id === participantId);
//         return participantUser ? participantUser.name : '';
//       });
//     } else {
//       // Handle the case where participants is not an array (e.g., set a default or return an empty array)
//       return [];
//     }
//   };

const getParticipantNames = () => {
    console.log('Participants:', participants);
    console.log('Users:', users);
  
    if (Array.isArray(participants) && participants.length > 0) {
      return participants.map((participantId) => {
        const participantUser = users.find((user) => user.id === participantId);
        return participantUser ? participantUser.name : '';
      });
    } else {
      console.error('Participants is not an array or it is an empty array:', participants);
      return ['No Participants']; // or any other default value
    }
  };
  
  
  
  

  const renderEqualAmount = () => {
    if (type === 'EQUAL') {
      const numberOfParticipants = participants.length + 1; // Including the payer
      const equalAmount = amount / numberOfParticipants;
      return `Equal Amount: ${equalAmount.toFixed(2)}`;
    }
    return null;
  };

  return (
    <div>
      <p>Expense ID: {id}</p>
      <p>Description: {description}</p>
      <p>Amount: {amount}</p>
      <p>Type: {type}</p>
      <p>Payer: {getPayerName()}</p>
      <p>Participants: {getParticipantNames()}</p>
      {renderEqualAmount()}
    </div>
  );
};

export default Expense;
