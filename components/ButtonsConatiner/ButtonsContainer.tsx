'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

export function ButtonsConatiner() {
  const { setColorScheme } = useMantineColorScheme();
  const [upvotes, setUpvotes] = useState(0);
  const [selected, setSelected] = useState<string | null>('Visit');
  const [upvoted, setUpvoted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUpvote = () => {
    setUpvotes((prevUpvotes) => prevUpvotes + 1);
    setUpvoted(true);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setShowDropdown(false);
  };

  return (
    <Group style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>

      <div
        style={{
          position: 'relative',
        }}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <Button
          style={{
            width: 100,
            height: 65,
            padding: 10,
            color: '#000',
            backgroundColor: 'transparent',
            borderColor: '#ccc',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selected || 'Select'}  
          
          <svg 
          style={{marginLeft: 5}}
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
          </svg>
        </Button>

        {showDropdown && (
          <div
            style={{
              width: 200,
              position: 'absolute',
              top: '100%',
              left: 0,
              zIndex: 1,
              // backgroundColor: '#F1F1F1',
              borderColor: '#ccc',
              borderRadius: '4px',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
              padding: '5px 0',
            }}
          >
            <div
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
                // borderBottom: '1px solid #ccc',
              }}
              onClick={() => handleSelect('Visit')}
            >
              Visit
            </div>
            <div
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
                // borderBottom: '1px solid #ccc',
              }}
              onClick={() => handleSelect('Website')}
            >
              Website
            </div>
            <div
              style={{
                padding: '5px 10px',
                cursor: 'pointer',
              }}
              onClick={() => handleSelect('Learn More')}
            >
              Learn More
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={handleUpvote}
        style={{
          width: 200,
          height: 65,
          backgroundColor: upvoted ? '#FF6F61' : 'transparent',
          color: upvoted ? '#fff' : '#000',
          borderColor: '#FF6F61',
          borderRadius: '4px',
          padding: '0 18px',
        }}
      >
        ▲ UPVOTE {upvotes}
      </Button>

    </Group>
  );
}
