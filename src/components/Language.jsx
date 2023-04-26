import React, { useState } from "react";

function Language({ lang }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    lang[1](selectedValue);
    console.log(`Selected value: ${selectedValue}`);
  };

  return (
    <div>
      <select value={lang[0]} onChange={handleChange}>
        <option value="ar-AE">Arabic (U.A.E.)</option>
        <option value="de-DE">German (Germany)</option>
        <option value="en-US">English (United States)</option>
        <option value="es-ES">Spanish (Spain)</option>
        <option value="es-MX">Spanish (Mexico)</option>
        <option value="fr-FR">French (France)</option>
        <option value="id-ID">Indonesian (Indonesia)</option>
        <option value="it-IT">Italian (Italy)</option>
        <option value="ja-JP">Japanese (Japan)</option>
        <option value="ko-KR">Korean (South Korea)</option>
        <option value="pl-PL">Polish (Poland)</option>
        <option value="pt-BR">Portuguese (Brazil)</option>
        <option value="ru-RU">Russian (Russia)</option>
        <option value="th-TH">Thai (Thailand)</option>
        <option value="tr-TR">Turkish (Turkey)</option>
        <option value="vi-VN">Vietnamese (Vietnam)</option>
        <option value="zh-CN">Chinese (China)</option>
        <option value="zh-TW">Chinese (Taiwan)</option>
      </select>
    </div>
  );
}

export default Language;
