export const Register = () => {
  return (
    <div className="main-component">
      <h2>Create an account</h2>
      <form>
        <input
          type="text"
          placeholder="Enter your username"
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
