import React from 'react';

import style from './flower.module.css';

function FormAddFlower():JSX.Element {
  return (
    <div>
<form className={style.form}>
    <input type="text" name="name" placeholder="name" />
    <input type="text" name="url" placeholder="url" />
    <button type="submit">save</button>
</form>
    </div>
  );
}

export default FormAddFlower;
