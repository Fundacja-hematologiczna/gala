import '../../styles/index.scss';
import './program.scss';
import ProgramHeader from './ProgramHeader.jsx';
import ProgramSchedule from './ProgramSchedule.jsx';
import ProgramLabel from './ProgramLabel.jsx';

const Program = () => {
  return (
    <main className="Program">
      <ProgramHeader />
      <ProgramSchedule />
      <ProgramLabel />
    </main>
  );
};

export default Program;
