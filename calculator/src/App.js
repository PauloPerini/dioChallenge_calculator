import { useState } from "react";
import Button from "./components/Button"
import Input from "./components/Input"
import { Container,Content, Row, Column, B} from "./styles";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [firstNumber, setFirsrtNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () =>{
    setCurrentNumber('0')
    setFirsrtNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirsrtNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () =>{
    if(firstNumber === '0'){
      setFirsrtNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }
  const handleMultNumbers = () =>{
    if(firstNumber === '0'){
      setFirsrtNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }
  const handleDivNumbers = () =>{
    if(firstNumber === '0'){
      setFirsrtNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handleEquals = () =>{
    if(firstNumber && operation && currentNumber){
      switch(operation){
        case '+':
          handleSumNumbers();
        break;
        case '-':
          handleSubNumbers();
        break;
        case '*':
          handleMultNumbers();
        break;
        case '/':
          handleDivNumbers();
        break;
        default:
        break;
        
      }
    }
  }
  return (
    
   <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="C" onClick={()=> handleOnClear()} />
        <Button label="/" onClick={handleDivNumbers} />
      </Row>
      <Row>
        <Button label="7" onClick={()=> handleAddNumber('7')} />
        <Button label="8" onClick={()=> handleAddNumber('8')} />
        <Button label="9" onClick={()=> handleAddNumber('9')} />
        <Button label="X" onClick={handleMultNumbers} />
      </Row>

      <Row>
        <Button label="4" onClick={()=> handleAddNumber('4')} />
        <Button label="5" onClick={()=> handleAddNumber('5')} />
        <Button label="6" onClick={()=> handleAddNumber('6')} />
        <Button label="-" onClick={handleSubNumbers} />
      </Row>

      <Row>
        <Button label="1" onClick={()=> handleAddNumber('1')} />
        <Button label="2" onClick={()=> handleAddNumber('2')} />
        <Button label="3" onClick={()=> handleAddNumber('3')} />
        <Button label="+" onClick={handleSumNumbers} />
      </Row>

      
      <Row>
      <Button label="0"/>
      <Button label="="/>
      </Row>
      
    </Content>
   </Container>
    
   
  );
}


export default App
