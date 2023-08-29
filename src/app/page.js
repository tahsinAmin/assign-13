'use client'

export default function Home() {

  const handleSubmit = () => {
    console.log("hello");
  }
  return (
    <div>HEllo World
      <button className="text-gray-100 bg-blue-400 p-2" onClick={handleSubmit}>Set Cookie</button>
    </div>
  )
}
