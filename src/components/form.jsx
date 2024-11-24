import React, { useState } from "react";

const EditForm = ({ currentImage, currentText, onSave, onCancel }) => {
    const [image, setImage] = useState(currentImage);
    const [text, setText] = useState(currentText);

    const handleSave = () => {
        onSave(image, text);
    };

return (
        <div className="form-container bg-slate-400 p-10 w-full max-w-96 m-6">
            <h2 className="text-center">Editar Card</h2>
            <form className="flex flex-col">
                <div>
                    <label htmlFor="image" className="font-bold"> Image URL </label>
                    <input
                        className="w-full p-2 mt-2"
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} // Corrigido: 'setimage' para 'setImage'
                    />
                </div>
                <div>
                    <label htmlFor="text">Texto</label>
                    <textarea
                        className="w-full p-2 mt-2 h-96"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-actions flex justify-between">
                    <button className="p-3 bg-green-700 text-white cursor-pointer rounded" type="button" onClick={handleSave}>
                        Salvar
                    </button>
                    <button type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditForm;
