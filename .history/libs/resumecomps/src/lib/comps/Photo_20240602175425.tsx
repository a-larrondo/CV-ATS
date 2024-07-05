import Image from 'next/image';
import photo from './photo.jpg';

export function Photo() {
  return (
    <div className="pt-6 content-center">
      <Image
        alt="Hans Poo"
        src={photo}
        style={{ width: '150px' }}
        className="content-center"
      />
    </div>
  );
}
