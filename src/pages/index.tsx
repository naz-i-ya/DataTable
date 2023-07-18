import { Box, Center, ChakraProvider, extendTheme } from '@chakra-ui/react';
import DataTable from '../components/DataTable';

const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Available Classes', 'Status', 'Select'];
const rows = [
  ['1 hour ago', '27001', 'naziya@gmail.com','Naziya','Economy', 'Failed', 'Select',],
  ['2 hours ago', '27001', 'jhon@gmail.com', 'Jhon', 'Business','Waiting', 'Select'],
  ['10 hours ago', '27001', 'deo@gmail.com', 'Deo', 'Economy', 'Paid', 'Select'],
  ['5 hours ago', '27001', 'gray@gmail.com', 'Gray', 'Business', 'Waiting', 'Select'],
  ['11 hours ago', '27001', 'sait@gmail.com', 'Sait', 'Economy', 'Failed', 'Select'],
  ['8 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['8 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Paid', 'Select'],
  ['12 hours ago', '27001', 'naz@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['1 hour ago', '27001', 'naziya@gmail.com','Naziya','Economy', 'Failed', 'Select',],
  ['19 hours ago', '27001', 'jhon@gmail.com', 'Jhon', 'Business','Waiting', 'Select'],
  ['10 hours ago', '27001', 'deo@gmail.com', 'Deo', 'Economy', 'Paid', 'Select'],
  ['11 hours ago', '27001', 'gray@gmail.com', 'Gray', 'Business', 'Waiting', 'Select'],
  ['8 hours ago', '27001', 'sait@gmail.com', 'Sait', 'Economy', 'Failed', 'Select'],
  ['12 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['18 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Paid', 'Select'],
  ['12 hours ago', '27001', 'naz@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['1 hour ago', '27001', 'naziya@gmail.com','Naziya','Economy', 'Failed', 'Select',],
  ['9 hours ago', '27001', 'jhon@gmail.com', 'Jhon', 'Business','Waiting', 'Select'],
  ['10 hours ago', '27001', 'deo@gmail.com', 'Deo', 'Economy', 'Paid', 'Select'],
  ['18 hours ago', '27001', 'gray@gmail.com', 'Gray', 'Business', 'Waiting', 'Select'],
  ['11 hours ago', '27001', 'sait@gmail.com', 'Sait', 'Economy', 'Failed', 'Select'],
  ['8 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['12 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Paid', 'Select'],
  ['8 hours ago', '27001', 'naz@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['1 hour ago', '27001', 'naziya@gmail.com','Naziya','Economy', 'Failed', 'Select',],
  ['9 hours ago', '27001', 'jhon@gmail.com', 'Jhon', 'Business','Waiting', 'Select'],
  ['10 hours ago', '27001', 'deo@gmail.com', 'Deo', 'Economy', 'Paid', 'Select'],
  ['11 hours ago', '27001', 'gray@gmail.com', 'Gray', 'Business', 'Waiting', 'Select'],
  ['8 hours ago', '27001', 'sait@gmail.com', 'Sait', 'Economy', 'Failed', 'Select'],
  ['1 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['2 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Paid', 'Select'],
  ['8 hours ago', '27001', 'naz@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['1 hour ago', '27001', 'naziya@gmail.com','Naziya','Economy', 'Failed', 'Select',],
  ['9 hours ago', '27001', 'jhon@gmail.com', 'Jhon', 'Business','Waiting', 'Select'],
  ['10 hours ago', '27001', 'deo@gmail.com', 'Deo', 'Economy', 'Paid', 'Select'],
  ['11 hours ago', '27001', 'gray@gmail.com', 'Gray', 'Business', 'Waiting', 'Select'],
  ['18 hours ago', '27001', 'sait@gmail.com', 'Sait', 'Economy', 'Failed', 'Select'],
  ['8 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
  ['2 hours ago', '27001', 'sara@gmail.com', 'Sara', 'Economy', 'Paid', 'Select'],
  ['8 hours ago', '27001', 'naz@gmail.com', 'Sara', 'Economy', 'Waiting', 'Select'],
];

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
});

const Home: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <Center>
          <DataTable headers={headers} rows={rows} caption="Bookings" sortable pagination />
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
