import { useState } from 'react';
import {Select,Input} from 'antd'
 import Hello2 from './hello2'
const person = {
    name: "John",
    age: 30,
    city: "New York"
  }
  const person2 = {
    person:{
    name: "John",
    age: 30,
    city: "New York"
    },
    sheeenam:{
        name:'seenam',
        age:25,
    },
    ankit:{
      name:'ankit patidar',
      age:30,
      company:{
        name:'netlink'
      }
  }
  }
const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [openMenu, setOpenMenu] = useState(false)
//   const keys = Object.keys(person);
//   const options = keys.map((key) => ({
//     key:person[key],
//     title:key,
//     value: person[key],
//     label: key // Capitalize the key
//   }));
  const handleSearch = (newValue) => {
    console.log("hello sheenam",newValue)
    // fetch(newValue, setData);
    // setData([{text:"hello",value:"hello"}])
    // /{{(.*?)}}/
    const params =newValue?.match(/([{][{][a-zA-Z0-9_]+[.][a-zA-Z0-9_.]*[}][}])/gi)?.reverse()
    // console.log("hello sk",params, newValue,newValue?.match(/([{][{][a-zA-Z0-9_.]*[}][}])/gi),newValue?.match(/([{][{][a-zA-Z0-9_][.][}][}])/gi), newValue?.match(/{{(.*?)}}/g))
   if(params?.length){
   const objname= params?.map(item=>item?.replace(/{{|}}/g,''))
   const regex = /.*\..*\..*/;

   const propertyName = objname[0]; 
    const [objectName, ...propName] = propertyName?.split('.')?.filter(item=>item)
    const keysname=propName?.join('')
    // ?.map(item=>`['${item}']`)?.join('')
    // const finalObj=keysname? person2[objectName][keysname]:person2[objectName]
    console.log("params",params,params.join(''),
    objname,keysname,
    propertyName,objectName,propName,
      `${objectName}${keysname}`, 
      person2[objectName],
      propName.join(''),
      person2['ankit']['company']['name'],
      propName.join('.'),
      person2[objectName],
      // person2[objectName]`${propName.join('.')}`

      // keysname? person2[objectName]`${keysname}`:person2[objectName],
  )
    setOpenMenu(true)
    if(person2[objectName]){
    const keys =keysname? Object.keys(person2[objectName]).filter(item=>item.includes(propName.join(''))): Object.keys(person2[objectName]);
    const options = keys.map((key) => ({
      key:person[key],
      title:`{{${objectName}.${key}}}`,
    //   value:person[key],
      value:`{{${objectName}.${key}}}`,
      label:key // Capitalize the key
    }));
    setData(options)
    setOpenMenu(true)
    }}
   else{
    hideMenu()
   }
   console.log("hello seenam sk",params?.join(''),newValue)
   setValue(newValue);
  };
  const handleChange = (newValue,option) => {
    console.log("hello shheenam onChange",newValue,option ,newValue.match(/{{(.*?)}}/g)?.reverse(), 
    )
    const value=newValue.match(/{{(.*?)}}/g)?.reverse().map(item=>newValue.replace(item,option)).join('') 
    setValue(value);
    hideMenu()
  };
  const hideMenu = () => {
    setOpenMenu(false)
    setData([])
};
console.log("hello sheenam 11111111",value,openMenu,data)
  return (
    <>
    <br/>
    {/* <Select
      showSearch={true}
      // value={value?`{{${value}}}`:value}
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      onBlur={hideMenu}
      notFoundContent={null}
      options={(data || [])
    //     .map((d) => ({
    //     value: d.value,
    //     label: d.text,
    //   }))
    }
      open={openMenu}
    /> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Input value={value} placeholder='hidden input' onChange={(e)=>handleSearch(e?.target?.value)}/>
    {data?.map(item=>
      <li onClick={()=>handleChange(value,item)}>{item?.label}</li>
      )}
</>

  );
};
const Hello = () => (
    <>
  <SearchInput
    placeholder="input"
    style={{
      width: 200,
    }}
  />

  {/* <Input style={{
      width: 200,
    }}
    value={`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`}
    onChange={(e)=>{
        
    }}
    /> */}
    <br/>
    {/* <Hello2/> */}
  </>
); 
export default  Hello
 
