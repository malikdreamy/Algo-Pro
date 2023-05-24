import React, {useState} from 'react'
import ai from '../utils/ai'
import NavBar from './AiNavbar'



export default function AiQuestion(){

    return(
        <>
       <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', margin: 0, padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
          Chat
        </div>
        <div style={{ padding: '20px', maxHeight: '400px', overflowY: 'scroll' }}>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>User 1:</span>
            <div style={{ marginTop: '5px' }}>Hello, can you help me with a coding question?</div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>User 2:</span>
            <div style={{ marginTop: '5px' }}>Sure! What's your question?</div>
          </div>
          {/* Add more messages here */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <input type="text" placeholder="Type your message" style={{ flexGrow: 1, padding: '5px', borderRadius: '3px', border: 'none' }} />
          <button style={{ marginLeft: '10px', padding: '8px 15px', border: 'none', backgroundColor: '#4caf50', color: '#ffffff', borderRadius: '3px', cursor: 'pointer' }}>Send</button>
        </div>
      </div>
    </div>
        </>
    
        );
}