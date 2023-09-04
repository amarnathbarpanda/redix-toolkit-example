import './App.css'
import AddPost from './feature/post/AddPost';
import PostList from './feature/post/PostList'

function App() {

  return (
    <div className='app p-4 w-full h-auto bg-slate-900'>
      <AddPost/>
      <PostList/>
    </div>
  )
}

export default App;