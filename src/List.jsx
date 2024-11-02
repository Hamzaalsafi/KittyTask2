import React, {CardsContext , useState, useRef,forwardRef , useEffect } from 'react';
import { Card } from './Card';
import { collection,updateDoc,getDocs,getDoc, doc, setDoc, deleteDoc } from 'firebase/firestore'; 
import { db } from './firebase2'; 
import { auth } from './firebase2';
import { onAuthStateChanged } from 'firebase/auth'; 
import { DndContext,TouchSensor , closestCenter, useSensor, useSensors, MouseSensor } from '@dnd-kit/core';

import { useMenuContext } from './MenuProvider';
import { useSortable } from '@dnd-kit/sortable';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

export const List = forwardRef(({item,Dragging,onDeleteList, title,lists, id,BoardId ,sharedWith}, ref) => {
  const [createCard, setCreateCard] = useState(false);
  const [menu,setmenu]=useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const AddingListRef = useRef(null);
  const [cardTitle, setCardTitle] = useState('');
  const [linkInvalid, setLinkInvalid] = useState("");
  const [cards, setCards] = useState([]);
  const [listTitle, setListTitle] = useState(title);
  const listinputRef=useRef(null);

  const menuRef=useRef(null);
  const listRef=useRef(null);
  const [copyButton,setCopyButton]=useState(false);
  const {  setMenuOpen } = useMenuContext();
  const { menuOpen } = useMenuContext();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    disabled: menuOpen 
  });
  const listMenu=(e)=>{
    e.preventDefault();
  console.log("asd");
    setMenuOpen(true);
    const rect = listRef.current.getBoundingClientRect();
    const menux=rect.left + window.scrollX + 270; 
    const menuy=rect.top + window.scrollY-6;
    
    setPosition({
      x: menux ,
      y:menuy 
    });
    document.body.classList.add('MenuisOpen');
    setmenu(true);
    
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
 
     if (menuRef.current && !menuRef.current.contains(event.target)&&!listRef.current.contains(event.target)&& !listinputRef.current.contains(event.target)) {
             setmenu(false);
             setMenuOpen(false);
             document.body.classList.remove('MenuisOpen');
     }
 
  
 };
 
 // Add the event listener
 document.addEventListener("click", handleClickOutside);
 
 // Cleanup
 return () => {
     document.removeEventListener("click", handleClickOutside);
 };
   }, [menu]);

   const copyToClipboard = () => {
    const user = auth.currentUser;
    const textarea = document.createElement('textarea');
    textarea.value = `users/${user.uid}/Boards/${BoardId}/Lists/${id}`; 
    document.body.appendChild(textarea); 
    textarea.select(); 
    document.execCommand('copy'); 
    document.body.removeChild(textarea); 
    setCopyButton(true);
    setTimeout(() => {
      setCopyButton(false);
  }, 1500);
 
};
  const handleTouchStart = (event) => {
    const touch = event.touches[0]; // Get the first touch point
    const element = event.target;
  
    // Check if the touch point is within the bounds of the scrollbar
    const isScrollbarArea = element.offsetWidth > 0 && touch.clientX >= element.clientWidth;
  
    if (isScrollbarArea) {
      event.stopPropagation(); // Prevent dragging if the touch is on the scrollbar
    }
  };
const handleMouseDown = (event) => {
  const element = event.target;


  const isScrollbarClick =
    element.offsetWidth > 0 && event.clientX >= element.clientWidth;

  if (isScrollbarClick) {
 
    event.stopPropagation();
  }
};



  const prevent=(event)=>{
    event.preventDefault();
  }

 
  const addCardByLink = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
        setLinkInvalid(""); 
  
        const sourceCardDocRef = doc(db, cardTitle); 
        setCardTitle(""); 
        const sourceCardDoc = await getDoc(sourceCardDocRef);
  
        if (sourceCardDoc.exists()) {
          const sourceCardData = sourceCardDoc.data();
          
          const newCardId = new Date().getTime().toString();
          const newCard = { ...sourceCardData, id: newCardId, order: cards.length };
  
          setCards((prevCards) => [...prevCards, newCard]);
  
          const newCardDocRef = doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${id}/cards`, newCardId);
          await setDoc(newCardDocRef, newCard);
  
          console.log("Card added successfully for current user");
  
          const sharedUpdatePromises = sharedWith.map((sharedUser) => {
            const sharedCardDocRef = doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${id}/cards`, newCardId);
            return setDoc(sharedCardDocRef, newCard);
          });
  
          await Promise.all(sharedUpdatePromises);
  
          console.log("Card added successfully for all shared users");
        } else {
          setLinkInvalid("Please check the link and try again.");
          setTimeout(() => setLinkInvalid(""), 3000);
          console.error("The source card does not exist at the specified link");
        }
      } catch (error) {
        setLinkInvalid("Please check the link and try again.");
        setTimeout(() => setLinkInvalid(""), 3000);
       
      }
    } else {
      setLinkInvalid("User is not authenticated");
      console.error("User is not authenticated");
    }
  };
  const addCard = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
        setCardTitle('');
        const cardId = new Date().getTime().toString();
        const labels = {
          label1: false,
          label2: false,
          label3: false,
          label4: false,
          label5: false,
          label6: false,
          label7: false,
          label8: false
        };
        const backgroundColor ="bg-gray-800";
        const newCard = { id: cardId, title: cardTitle,labels:labels,background:backgroundColor};
  
        setCards((prevCards) => [...prevCards, newCard]);
  
   
        const cardDocRef = doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${id}/cards`, cardId);
        await setDoc(cardDocRef, {
          id: cardId,
          title: cardTitle,
          labels: labels,
          order: cards.length,
          background:backgroundColor
        });
  
        console.log('Card added successfully for current user');
 
        const sharedUpdatePromises = sharedWith.map((sharedUser) => {
          const sharedCardDocRef = doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${id}/cards`, cardId);
          return setDoc(sharedCardDocRef, {
            id: cardId,
            title: cardTitle,
            labels: labels,
            order: cards.length,
            background:backgroundColor
          });
        });
  
        await Promise.all(sharedUpdatePromises);
  
        console.log('Card added successfully for all shared users');
  
      } catch (error) {
        console.error('Error adding card to Firestore: ', error);
      }
    } else {
      console.error('User is not authenticated');
    }
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchCards = async () => {
          const cardRef = collection(db,`users/${user.uid}/Boards/${BoardId}/Lists/${id}/cards`);
          const snapshot = await getDocs(cardRef);
          const cardsTemp = snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            labels: doc.data().labels,
            order: doc.data().order,
            background:doc.data().background
          })).sort((a, b) =>a.order - b.order);
  
          setCards(cardsTemp);
        };
  
        fetchCards().catch((error) => console.error('Error fetching cards:', error));
      } else {
        setCards([]);
      }
    });
  
    return () => unsubscribeAuth();
  }, [id]);


  useEffect(() => {
    if (!createCard) {
      return;
    }

    const handleClickOutside = (event) => {
      if (AddingListRef.current && !AddingListRef.current.contains(event.target)) {
        ExitFromAddingList();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [createCard]);

  const AddAnotherList = (event) => {
    event.stopPropagation();
    setCreateCard(true);
  };

  const ExitFromAddingList = () => {
    setCreateCard(false);
  };
  const listInputUpdate = async (e) => {
    const newTitle = e.target.value; 
    setListTitle(newTitle);
    
    const user = auth.currentUser; 
    if (user) {
      try {
 
        await updateDoc(
          doc(db, `users/${user.uid}/Boards/${BoardId}/Lists`, id),
          { title: newTitle }
        );

        const sharedTitleUpdatePromises = sharedWith.map((sharedUser) =>
          updateDoc(
            doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists`, id),
            { title: newTitle }
          )
        );
        
        await Promise.all(sharedTitleUpdatePromises);
  
      } catch (error) {
        console.error("Error updating list title: ", error);
      }
    } else {
      console.error("User is not authenticated.");
    }
};
 
  
  const handleDragEnd = async (event) => {
    const { active, over } = event;
  
    if (active.id && over?.id) {
      const user = auth.currentUser;
  
      if (user) {
        const oldIndex = cards.findIndex((item) => item.id === active.id);
        const newIndex = cards.findIndex((item) => item.id === over.id);
  
        if (oldIndex !== -1 && newIndex !== -1) {
          const updatedItems = arrayMove(cards, oldIndex, newIndex);
  
          try {
            setCards(updatedItems);
  
          
            const updatePromises = updatedItems.map((item, index) =>
              updateDoc(doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${id}/cards`, item.id), {
                order: index,
                title: item.title,
                labels: item.labels,
                background: item.background,
              })
            );
  

            const sharedUpdatePromises = sharedWith.map((sharedUser) =>
              updatedItems.map((item, index) =>
                updateDoc(doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${id}/cards`, item.id), {
                  order: index,
                  title: item.title,
                  labels: item.labels,
                  background: item.background,
                })
              )
            );
  
            // Flatten and await all promises
            await Promise.all([...updatePromises, ...sharedUpdatePromises.flat()]);
          } catch (error) {
            console.error('Error updating cards:', error);
          }
        }
      } else {
        console.error('User is not authenticated');
      }
    }
  };
  
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 650);
    };


    window.addEventListener('resize', handleResize);

  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, 0, 20px) rotate(${isDragging ? -2 : 0}deg)` 
      : undefined,
    transition,
    backgroundColor: isDragging ? 'rgba(0, 0, 0, 0.8)' : '',
    cursor: isDragging ? 'grabbing' : 'pointer',
    zIndex: isDragging ? 10 : 'auto',
   
 
  };
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5 // Adding a tolerance property
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5 // Adding a tolerance property
      },
    })
  )
  const handleCardDeletion = async (deletedCardId) => {
    const user = auth.currentUser;
  
    // Step 1: Update the local state
    setCards((prevCards) => {
      const updatedCards = prevCards
        .filter((card) => card.id !== deletedCardId)
        .map((card, index) => ({ ...card, order: index })); 
  
      return updatedCards;
    });
  
    if (user) {
      try {
     
        const updatedCards = cards.filter((card) => card.id !== deletedCardId);
  
    
        await deleteDoc(doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${id}/cards`, deletedCardId));
  
        
        const updateCurrentUserPromises = updatedCards.map((card, index) =>
          updateDoc(doc(db, `users/${user.uid}/Boards/${BoardId}/Lists/${id}/cards`, card.id), {
            order: index,
            title: card.title,
            labels: card.labels,
            background:card.background
          })
        );
  
        
        const sharedUpdatePromises = sharedWith.map((sharedUser) => {
          const sharedDeletePromise = deleteDoc(doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${id}/cards`, deletedCardId));
  
          const sharedOrderUpdatePromises = updatedCards.map((card, index) =>
            updateDoc(doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists/${id}/cards`, card.id), {
              order: index,
              title: card.title,
              labels: card.labels,
              background:card.background
            })
          );
  
          return [sharedDeletePromise, ...sharedOrderUpdatePromises];
        }).flat(); 
  
        // Await all deletion and update operations
        await Promise.all([...updateCurrentUserPromises, ...sharedUpdatePromises]);
  
        console.log("Card deleted and orders updated for all shared users");
  
      } catch (error) {
        console.error("Error updating card title: ", error);
      }
    } else {
      console.error("User is not authenticated");
    }
  };
  const deleteList = async () => {
    const user = auth.currentUser;
  
    if (user) {
      try {
     
        onDeleteList(id); 
        const listDocRef = doc(db, `users/${user.uid}/Boards/${BoardId}/Lists`, id);
        await deleteDoc(listDocRef);
  
        const sharedDeletePromises = sharedWith.map((sharedUser) => {
          const sharedListDocRef = doc(db, `users/${sharedUser.id}/Boards/${BoardId}/Lists`, id);
          return deleteDoc(sharedListDocRef);
        });
  

        await Promise.all(sharedDeletePromises);

  
      } catch (error) {
        console.error("Error deleting card: ", error);
      }
    } else {
      console.error("User is not authenticated");
    }
  };
  return (
<div style={style}  className={`bg-black  ListCssCustom  px-2.5 py-2.5 shadow-xl  rounded-xl h-fit ${Dragging&&!isDragging ? 'swing' : ''} ${!Dragging||!isDragging ? 'snap-start' : ''}  ${isDragging?'dragList': ""}`}>
<div className={`overlay ${menu ? 'visible' : ''}`}></div>
       {menu&&(<div ref={menuRef}  className='card flex item  z-[10000]  absolute  flex-col gap-1'  style={{

            top:`${position.y+5}px`,
            left:window.innerWidth>700?`${position.x-225}px`:`${position.x-335}px`,
            alignItems: `${window.innerWidth>700? 'start' : 'end'}`

          }}>
     
     <button onClick={copyToClipboard} className={`flex text-gray-300 shadow-xl ${copyButton?"bg-green-600":"bg-gray-800"}  ${copyButton?"hover:bg-green-700":"hover:bg-gray-700"}  font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm`}>
{copyButton? <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
       className="size-5 mr-2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
    </svg>:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>)}
{copyButton?"Copied!":"Copy"}
 </button>

 <button onClick={deleteList} className="flex text-gray-300 shadow-xl bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm">
 <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5} 
      stroke="currentColor"
      className="size-5 mr-2" 
    >
      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
Delete
 </button>
 </div>)}
    <div 
      ref={setNodeRef}
      {...attributes}
      {...listeners}
     
      onContextMenu={prevent}
   
    >
     
   
      <div className="flex relative overflow-x-hidden w-full h-10 justify-between items-start">
        <div className="focus:border-solid select-none focus:border-blue-500 focus:box-shadow focus:outline-none text-slate-300 px-1 text-lg mt-1.5 w-full mr-2">
        {listTitle.length > 22 ? `${listTitle.substring(0, 22)}...` : listTitle}
        {menu && (
  <div>
    <textarea
      ref={listinputRef}
      className="z-[1000] absolute sm:w-full w-[68%] h-10 left-0 sm:right-0 top-0 pb-2 pt-3 ri text-start px-2.5 rounded-md bg-gray-800 border-solid border-slate-400 border-0 focus:outline-none text-slate-300 resize-none overflow-hidden focus:text-slate-300" // Added focus:text-slate-300
      value={listTitle}
      rows='1'
      onChange={listInputUpdate}
    />
  </div>
)}
        </div>
        <button ref={listRef} onClick={listMenu} className="text-slate-300 p-1 hover:opacity-80 select-none text-xl"> <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg></button>
      </div>
    
      <div     onTouchStart={handleTouchStart}  onMouseDown={handleMouseDown}  className=" flex  pr-1.5 flex-col justify-start kkkk my-3 items-center">
    
        <DndContext sensors={sensors} collisionDetection={closestCenter}  onDragEnd={handleDragEnd}>
          <SortableContext items={cards} strategy={verticalListSortingStrategy}>
            {cards.map((item) => (
              <Card 
              BoardId={BoardId}
                key={item.id} 
                listid={id}
                title={item.title}  
                BG={item.background}
                id={item.id} 
                labels={item.labels}
                item={item}
                onDeleteCard={handleCardDeletion}
                sharedWith={sharedWith}
                lists={lists}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>

        </div>
        <div>
      {!createCard && (
        <button 
          onClick={AddAnotherList} 
          className="text-slate-300 select-none text-opacity-95 hover:opacity-100 hover:bg-zinc-800 hover:bg-opacity-90 hover:shadow-xl w-full text-start px-1.5 py-1  rounded-md"
        >
          + Add a card
        </button>
      )}
  
      {createCard && (
        <div className='mt-1' ref={AddingListRef}>
          <textarea
            placeholder='Enter card title...'
            className='pb-5 pt-1 h-16   text-start px-2.5 rounded-md w-full border-solid border-slate-400 border-0 focus:outline-none bg-gray-800 text-slate-300 resize-none overflow-hidden'
            onChange={(e) => setCardTitle(e.target.value)}
            value={cardTitle}
            rows='1'
            onInput={(e) => { 
              e.target.style.height = 'auto'; 
              e.target.style.height = `${e.target.scrollHeight + 15}px`; 
            }}
            onClick={(e) => e.stopPropagation()} 
          />
          <div className='mt-3  flex justify-start gap-1.5'>
            <button 
              onClick={addCard} 
              className='bg-blue-600 hover:bg-blue-700 mr-1.5 text-gray-950 py-1 px-2 rounded-md text-m'
            >
              Add Card
            </button>

            <button 
              onClick={addCardByLink} 
            className='text-slate-300 py-1 px-1 rounded-md text-md hover:bg-gray-800'
            >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
    </svg>
            </button>
            <button 
              onClick={() => setCreateCard(false)} 
              className='text-slate-300 py-1 px-1  rounded-md text-md hover:bg-gray-800'
            >
              <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
            </button>
          </div>
          <p className='text-red-500 text-sm text-center mt-1'>{linkInvalid}</p>
        </div>
       
      )}
    </div>
     </div>
  );
  
})