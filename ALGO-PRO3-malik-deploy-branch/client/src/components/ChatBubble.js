import React from 'react'

export default function ChatBubble ({ user, message }){
    return (
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>{user}:</span>
        <div style={{ marginTop: '5px' }}>{message}</div>
      </div>
    );
  };
  