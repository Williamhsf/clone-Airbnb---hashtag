import { useState } from "react";

const NewPlace = () => {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = (e) => {}

    return (
        <form onSubmit={handleSubmit} className="w-full px-8 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="ml-2 text-2xl font-bold">Título</label>
                <input 
                    type="text"
                    placeholder="Digite o título do seu anúncio"
                    className="rounded-full border border-gray-300 px-4 py-2"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}     
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="ml-2 text-2xl font-bold">Cidade e país</label>
                <input 
                    type="text"
                    placeholder="Digite a Cidade e país do seu anúncio"
                    className="rounded-full border border-gray-300 px-4 py-2"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}   
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="photos" className="ml-2 text-2xl font-bold">Fotos</label>

                <div className="flex gap-2">
                    <input 
                        type="text"
                        placeholder="Adicione uma foto pelo link dela"
                        className="grow rounded-full border border-gray-300 px-4 py-2"
                        value={photo}
                        id="photos"
                        onChange={(e) => setPhoto(e.target.value)}     
                    />
                    <button className="cursor-pointer rounded-full border border-gray-300  bg-gray-100 px-4 py-2 transition
                    hover:bg-gray-200">
                        Enviar foto
                    </button>

                </div>

                <div className="grid grid-cols-5 gap-4 mt-2">
                    <label 
                        htmlFor="file"
                        className="aspect-square cursor-pointer rounded-2xl border border-gray-300 flex justify-center items-center gap-2"
                    >
                        <input type="file" id="file" className="hidden"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        upload

                    </label>
                    <button >
                        
                    </button>
                </div>                
            </div>

            <div className="flex flex-col gap-1">
                <h2 className="ml-2 text-2xl font-bold">Título</h2>
                <input 
                    type="text"
                    placeholder="Digite o título do seu anúncio"
                    className="rounded-full border border-gray-300 px-4 py-2"     
                />
            </div>
        </form>)
}

export default NewPlace;