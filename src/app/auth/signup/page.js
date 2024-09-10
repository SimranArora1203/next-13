"use client";
import Form from '@/app/Form';
import Button from '@/app/Button';

export default function SignupPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Sign up</h1>
      <Form onSubmit={() => console.log('Signup submitted')}>  
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-900">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-900">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <Button>Sign up</Button>
      </Form>
    </div>
  );
}