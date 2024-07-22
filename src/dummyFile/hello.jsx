import { useState } from 'react';
import { Select, Input } from 'antd'

const person2 = {
  person: {
    name: "John",
    age: 30,
    city: "New York"
  },
  sheeenam: {
    name: 'seenam',
    age: 25,
  },
  ankit: {
    name: 'ankit patidar',
    age: 30,
    company: {
      companyName: 'netlink'
    }
  }
}
const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [value, setValue] = useState();
  const [openMenu, setOpenMenu] = useState(false)

  const handleSearch = (newValue) => {
    const reg = 
    /({{\w+(\.\w*)*}})/gi
    // /({{\w+\.\w*(\.\w*)*?}})/gi
    // /([{][{]+[a-zA-Z0-9_]*[}][}])/gi
    const params = newValue?.match(reg)?.reverse()
    if (params?.length) {
      const objname = params?.map(item => item?.replace(/{{|}}/g, ''))
      const regex = /.*\..*\..*/;
      const propertyName = objname?.[0];
      const [objectName='', ...propName] = propertyName?.split('.')?.filter(item => item)
      const keysname = (propName||[])?.join('')
      const objKeys = propertyName?.split('.')?.filter(item => item)
      const obj1 = objKeys?.reduce((obj, prop) => obj?.[prop], person2)
      const obj2 = objKeys.slice(0, -1)?.reduce((obj, prop) => obj?.[prop], person2)
      const objName = objKeys?.length > 1 ? objKeys?.slice(0, -1)?.join('.') : objectName
      const keyName = objKeys?.slice(-1)?.[0]
      const obj=objKeys?.length==1&& !propertyName?.endsWith('.') ?person2:typeof obj1!=="object"||!propertyName?.endsWith('.')?obj2:obj1
        const keys = 
        objKeys.length>1||(objKeys.length==1&&!propertyName?.endsWith('.'))?
         Object.keys(obj).filter(item => item?.startsWith(keyName)):Object.keys(obj)
           ; 
        const options = keys.map((key) =>
        ({
          key: obj[key], 
          title: objKeys?.length==1 &&!propertyName?.endsWith('.') ?`{{${key}}}`:`{{${objName}.${key}}}`,
          value: obj[key], 
          label: key,
          type: typeof obj !== 'object' ? typeof obj :typeof obj[key],
          value2:`{{${objname}${key}}}`,
        }));
        setData(options)
        setOpenMenu(true)
      // }
    }
    else {
      hideMenu()
    }
    setInputValue(newValue);
  };
  const handleChange = (newValue, option) => {
    const inputVal = newValue?.match(/{{(.*?)}}/g)?.reverse().map(item=>newValue.replace(item, option?.title))?.join(' ')
    setInputValue(inputVal);
    setValue(option?.value)
    hideMenu()
  };
  const hideMenu = () => {
    setOpenMenu(false)
    setData([])
  };
  return (
    <>
      <br />
      <Input value={inputValue} placeholder='hidden input' onChange={(e) => handleSearch(e?.target?.value)} style={{ width: '200px' }} />
      {openMenu && data?.map((item, index) =>
        <li role="listitem" key={String(index + 1)} onClick={() => handleChange(inputValue, item)}><span>{item?.label} &nbsp; {item.type}</span></li>
      )}
    </>

  );
};
export default SearchInput

