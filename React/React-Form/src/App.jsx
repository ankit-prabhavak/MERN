import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // API call simulate karte hain
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> Player: </label>
        <input
          className={errors.playerName ? 'input-error' : ''}
          {...register('playerName', {
            required: 'Player name is required',
            minLength: {
              value: 3,
              message: 'Player name must have at least 3 characters',
            },
            maxLength: {
              value: 10,
              message: 'Player name cannot exceed 10 characters',
            },
          })}
        />
        {errors.playerName && <p className="error-msg">{errors.playerName.message}</p>}
      </div>

      <br />

      <div>
        <label> Country: </label>
        <input
          className={errors.countryName ? 'input-error' : ''}
          {...register('countryName', {
            required: 'Country name is required',
            pattern: {
              value: /^[A-Za-z\s]{2,}$/,
              message: 'Please enter a valid country name (letters only)',
            },
          })}
        />
        {errors.countryName && <p className="error-msg">{errors.countryName.message}</p>}
      </div>

      <br />

      <div>
        <label> IPL Team: </label>
        <input {...register('iplTeamName')} />
      </div>

      <br />

      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "submit"} />
    </form>
  );
}

export default App;
