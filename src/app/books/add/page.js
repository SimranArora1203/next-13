import Form from '@/app/Form';
import Button from '@/app/Button';

export default function AddBookPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Add New Book</h1>
      <Form onSubmit={() => console.log('Add book submitted')}>
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 font-medium text-gray-900">Title</label>
          <input type="text" id="title" name="title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <div className="mb-6">
          <label htmlFor="author" className="block mb-2 font-medium text-gray-900">Author</label>
          <input type="text" id="author" name="author" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <Button>Add Book</Button>
      </Form>
    </div>
  );
}