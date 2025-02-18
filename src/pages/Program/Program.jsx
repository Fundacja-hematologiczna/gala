import '../../styles/index.scss';
import './program.scss';
import ProgramHeader from './ProgramHeader.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';

const Program = () => {
  return (
    <main className="Program">
      <ProgramHeader />
      <ProgramSchedule />
    </main>
  );
};

export default Program;
