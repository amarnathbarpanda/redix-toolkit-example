import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';
const initialState = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Rolls Royce Phantom",
        content: "The Rolls-Royce Phantom was Rolls-Royce's replacement for the original Silver Ghost. Introduced as the New Phantom in 1925, the Phantom had a larger engine than the Silver Ghost and used pushrod-operated overhead valves instead of the Silver Ghost's side valves.https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions:{
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Audi R8",
        content: "The Audi R8 is a mid-engine, 2-seater sports car,[2][3] which uses Audi's trademark quattro permanent all-wheel drive system.[2] It was introduced by the German car manufacturer Audi AG in 2006.The car is exclusively designed, develope",
        date: sub(new Date(), { minutes: 8 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Mercedes benz S-Class",
        content: "The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for \"special class\", abbreviated as \"S- Klasse\"), is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz. The S-Class is the designation for top-of-the-line Mercedes-Benz models and was officially introduced in 1972 with the W116, and has remained in use ever since. The S-Class is the flagship vehicle for Mercedes-Benz.",
        date: sub(new Date(), { minutes: 6 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Ford Mustang Shelby GT-500",
        content: "The Shelby Mustang is a high-performance variant of the Ford Mustang built by Shelby American from 1965 to 1967 and by the Ford Motor Company from 1968 to 1970.In 2005, Ford revived the Shelby nameplate for a high- performance model of the fifth - generation Ford Mustang.[1]",
        date: sub(new Date(), { minutes: 4 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Bmw Xm",
        content: "The BMW XM is a plug-in hybrid electric full-size[4][5] luxury crossover SUV manufactured by BMW under the BMW M subsidiary. It is the second car developed entirely by BMW M, after the BMW M1 in 1978.[7] A more powerful special-edition trim, the \"Label Red\", was also announced alongside the unveiling of the XM on 27 September 2022.",
        date: sub(new Date(), { minutes: 2 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, img = '', content, userId) {
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        img,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
})
export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;