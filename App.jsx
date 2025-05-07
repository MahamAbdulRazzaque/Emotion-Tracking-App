import React , { useState } from "react";
import './App.css';

export default function App() {
  const [mood , setMood] = useState('');

  const handleMood = (emoji) => {
    setMood(emoji);
  }

  const moodText = {     
    '😃': 'Happy',     
    '🥰': 'Lovly',     
    '😢': 'Sad',     
    '😠': 'Angry',     
    '😕': 'Tired',     
    '😴': 'Sleeping',     
    '🤩': 'Excited',     
    '😒': 'Bored',     
    '😎': 'Confident',
    '😇': 'Blessed',
    '🤔': 'Thinking',
    '😱': 'Shocked',
    '😤': 'Frustrated',
    '😭': 'Crying',
    '🤗': 'Hugging',
    '🙄': 'Annoyed',
    '😌': 'Relieved',
    '🤪': 'Silly',
    '😬': 'Nervous',
    '🙃': 'Embarrassed'   
  }


return (     
<div className="app">       
<h1>How are you feeling today?</h1>       
<div className="emoji-options">         
<button onClick={() => handleMood('😃')}>😃</button>         
<button onClick={() => handleMood('🥰')}>🥰</button>         
<button onClick={() => handleMood('😢')}>😢</button>         
<button onClick={() => handleMood('😠')}>😠</button> 
<button onClick={() => handleMood('😕')}>😕</button>         
<button onClick={() => handleMood('😴')}>😴</button>                
<button onClick={() => handleMood('🤩')}>🤩</button>         
<button onClick={() => handleMood('😒')}>😒</button>         
<button onClick={() => handleMood('😎')}>😎</button>
<button onClick={() => handleMood('😇')}>😇</button>
<button onClick={() => handleMood('🤔')}>🤔</button>
<button onClick={() => handleMood('😱')}>😱</button>
<button onClick={() => handleMood('😤')}>😤</button>
<button onClick={() => handleMood('😭')}>😭</button>
<button onClick={() => handleMood('🤗')}>🤗</button>
<button onClick={() => handleMood('🙄')}>🙄</button>
<button onClick={() => handleMood('😌')}>😌</button>
<button onClick={() => handleMood('🤪')}>🤪</button>
<button onClick={() => handleMood('😬')}>😬</button>
<button onClick={() => handleMood('🙃')}>🙃</button>         
</div>        
{mood && (         
<div className="mood-display">           
<p>You’re feeling <strong>{moodText[mood]}</strong> 
{mood}</p>         
</div>       
)}     
</div>   
); 
  }