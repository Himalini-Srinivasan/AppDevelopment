// import React, { useState } from 'react';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const ChatBox = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     const userMessage = { role: 'user', content: input };

//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     console.log("Sending message:", userMessage);

//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-4',
//           messages: [...messages, userMessage],
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer $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`, // Replace with your API key
//           },
//         }
//       );

//       console.log("Response from API:", response);

//       const gptMessage = response.data.choices[0].message;

//       setMessages((prevMessages) => [...prevMessages, gptMessage]);
//     } catch (error) {
//       console.error('Error sending message to ChatGPT:', error);
//     }

//     setInput('');
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <Typography variant="h6" sx={{ marginBottom: '16px' }}>Chat with AI</Typography>
//       <Box sx={{ height: '400px', overflowY: 'scroll', marginBottom: '16px', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
//         {messages.map((msg, index) => (
//           <Typography key={index} sx={{ margin: '8px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
//             <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
//           </Typography>
//         ))}
//       </Box>
//       <TextField
//         fullWidth
//         variant="outlined"
//         placeholder="Type your message..."
//         value={input}
//         onChange={handleInputChange}
//         sx={{ marginBottom: '16px' }}
//       />
//       <Button variant="contained" color="secondary" onClick={sendMessage} fullWidth>
//         Send
//       </Button>
//     </Box>
//   );
// };

// export default ChatBox;
// GPT2Query.js
// import React, { useState } from 'react';

// const ChatBox = () => {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');
//   const [error, setError] = useState(null);

//   const API_URL = 'https://api-inference.huggingface.co/models/gpt2';
//   const headers = {
//     Authorization: 'Bearer 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',
//     'Content-Type': 'application/json',
//   };

//   const queryAPI = async (payload) => {
//     try {
//       const res = await fetch(API_URL, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(payload),
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setResponse(data[0]?.generated_text || 'No response text');
//       } else {
//         const errorText = await res.text();
//         setError(`Error: ${errorText}`);
//       }
//     } catch (err) {
//       setError(`Request failed: ${err.message}`);
//     }
//   };

//   const handleSubmit = () => {
//     const payload = { inputs: input };
//     queryAPI(payload);
//   };

//   return (
//     <div>
//       <h1>GPT-2 Query</h1>
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         rows="4"
//         cols="50"
//         placeholder="Enter your query here..."
//       />
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//       <div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {response && <p>{response}</p>}
//       </div>
//     </div>
//   );
// };

// export default ChatBox;
// import React, { useState } from 'react';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const ChatBox = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [error, setError] = useState(null);

//   const API_URL = 'https://api-inference.huggingface.co/models/gpt2';
//   const headers = {
//     Authorization: 'Bearer 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',
//     'Content-Type': 'application/json',
//   };

//   const queryAPI = async (payload) => {
//     try {
//       const response = await axios.post(API_URL, payload, { headers });
//       const data = response.data;
//       // Assuming the response is similar to the example with 'generated_text'
//       setMessages((prevMessages) => [...prevMessages, { role: 'ai', content: data[0]?.generated_text || 'No response text' }]);
//     } catch (error) {
//       setError(`Error: ${error.response?.data?.error || error.message}`);
//     }
//   };

//   const handleSubmit = () => {
//     if (input.trim() === '') return;

//     const userMessage = { role: 'user', content: input };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     const payload = { inputs: input };
//     queryAPI(payload);

//     setInput('');
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <Typography variant="h6" sx={{ marginBottom: '16px' }}>Chat with AI</Typography>
//       <Box sx={{ height: '400px', overflowY: 'scroll', marginBottom: '16px', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
//         {messages.map((msg, index) => (
//           <Typography key={index} sx={{ margin: '8px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
//             <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
//           </Typography>
//         ))}
//       </Box>
//       <TextField
//         fullWidth
//         variant="outlined"
//         placeholder="Type your message..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         sx={{ marginBottom: '16px' }}
//       />
//       <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
//         Send
//       </Button>
//       {error && <Typography color="error" sx={{ marginTop: '16px' }}>{error}</Typography>}
//     </Box>
//   );
// };

// export default ChatBox;
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ChatBox = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const API_URL = 'https://api-inference.huggingface.co/models/gpt2';
  const headers = {
    Authorization: 'Bearer Apikey',
    'Content-Type': 'application/json',
  };

  const queryAPI = async (payload) => {
    try {
      const response = await axios.post(API_URL, payload, { headers });
      const data = response.data;
      setMessages((prevMessages) => [...prevMessages, { role: 'ai', content: data[0]?.generated_text || 'No response text' }]);
    } catch (error) {
      setError(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleSubmit = () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const payload = { inputs: input };
    queryAPI(payload);

    setInput('');
  };

  const toggleChatVisibility = () => {
    setIsChatVisible((prev) => !prev);
  };

  return (
    <Box sx={{ width: '100%',maxWidth: '600px', backgroundColor:'white', margin: '0 auto', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' ,marginBottom: '8px',marginTop: '8px'}}>
      <Button variant="contained" color="secondary" onClick={toggleChatVisibility} fullWidth sx={{ marginBottom: '8px' }}>
        {isChatVisible ? 'Hide' : 'SupportBot'}
      </Button>
      {isChatVisible && (
        <Box sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '8px' }}>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>SupportBot</Typography>
          <Box sx={{ height: '200px', overflowY: 'scroll', marginBottom: '8px', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            {messages.map((msg, index) => (
              <Typography key={index} sx={{ margin: '8px 0', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
              </Typography>
            ))}
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              marginBottom: '8px'
            }}
          />
          <Button variant="contained" color="secondary" onClick={handleSubmit} fullWidth >
            Send
          </Button>
          {error && <Typography color="error" >{error}</Typography>}
        </Box>
      )}
    </Box>
  );
};

export default ChatBox;
