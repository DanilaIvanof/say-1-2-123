import React from 'react';
import logo from './logo.svg';
import './App.css';
import contactList from './components/ContactList/ContactList';
import { setConstantValue } from 'typescript';

function App() {
  const dispatch = useDispatch();
  const [isFetching, toggleFetchingMode] = useState(false);

  useEffect(() => {
    const asyncFunc = async () =>{
      toggleFetchingMode(true);
      const contacts = await contactsAPI.getContacts();

      toggleFetchingMode(false);

      dispatch(setContacts(contacts));

    };
    asyncFunc();
   }, [dispatch]);
   
   return(
     <Container>
       {isFetching && <Preloader />}
       <NewContactForm />
       <contactList />
     </Container>
   );
  
};

export default App;
