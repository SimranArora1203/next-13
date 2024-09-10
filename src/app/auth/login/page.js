"use client";
import Form from '@/app/Form';
import Button from '@/app/Button';

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-2">Login</h1>
      <Form onSubmit={() => console.log('Login submitted')}>  
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-900">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required />
        </div>
        <Button>Login</Button>
      </Form>
    </div>
  );
}