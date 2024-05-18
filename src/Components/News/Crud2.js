import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crud2 = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', description: '', image: '', likes: 0 });
    const [editingItemId, setEditingItemId] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const result = await axios.get('https://663e7a53e1913c476797c189.mockapi.io/news');
                setItems(result.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchItems();
    }, []);

    const createItem = async () => {
        try {
            const result = await axios.post('https://663e7a53e1913c476797c189.mockapi.io/news', formData);
            setItems([...items, result.data]);
            setFormData({ name: '', description: '', image: '', likes: 0 }); 
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`https://663e7a53e1913c476797c189.mockapi.io/news/${id}`);
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const updateItem = async () => {
        try {
            await axios.put(`https://663e7a53e1913c476797c189.mockapi.io/news/${editingItemId}`, formData);
            const updatedItems = items.map(item => {
                if (item.id === editingItemId) {
                    return { ...item, ...formData };
                }
                return item;
            });
            setItems(updatedItems);
            setEditingItemId(null);
            setFormData({ name: '', description: '', image: '', likes: 0 }); 
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const editItem = (item) => {
        setFormData(item);
        setEditingItemId(item.id);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold my-4 text-gray-200">CRUD Operations</h2>
            <div className="mb-4">
                <label className="block text-slate-400">Name:</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="border border-gray-400 rounded px-3 py-1 focus:outline-none focus:border-blue-300" />
            </div>
            <div className="mb-4">
                <label className="block text-slate-400">Description:</label>
                <input type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="border border-gray-400 rounded px-3 py-1 focus:outline-none focus:border-blue-300" />
            </div>
            <div className="mb-4">
                <label className="block text-slate-400">Image:</label>
                <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="border border-gray-400 rounded px-3 py-1 focus:outline-none focus:border-blue-300" />
            </div>
            {editingItemId ? (
                <button onClick={updateItem} className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600">Update</button>
            ) : (
                <button onClick={createItem} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">Create</button>
            )}
            {isLoading ? (
                <div>Loading...</div> 
            ) : (
                <ul className="mt-4">
                    {items.map(item => (
                        <li key={item.id} className="border-b border-gray-300 py-4 flex justify-between items-center hover:bg-gray-800">
                            <div>
                                <h3 className="text-xl font-bold text-neutral-400">{item.name}</h3>
                                <p className=' text-stone-300'>{item.description}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600">Delete</button>
                                <button onClick={() => editItem(item)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Edit</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Crud2;