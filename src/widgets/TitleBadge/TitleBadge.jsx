import './TitleBadge.css';

export const TitleBadge = ({ text }) => {
  // Разбиваем текст на массив слов по пробелу
  // filter(word => word) - убираем пустые строки
  // || [] - если text не передан - возвращаем пустой массив
  const words = text?.split(' ').filter(word => word) || [];

  const elements = [];

  // Проходим по каждому слову
  words.forEach((word, index) => {
    // Добавляем span с текущим словом
    elements.push(<span key={`word-${index}`} className="badge-letter">{word}</span>);

    // Добавляем пустой span с отступом после каждого слова, кроме последнего
    // Это нужно для визуального разделения слов (как замена пробелу)
    if (index < words.length - 1) {
      elements.push(
        <span
          key={`space-${index}`} // Уникальный ключ для пустого span
          className="badge-letter"
          style={{ marginRight: '8px' }} // Отступ справа
        ></span>
      );
    }
  });

  return (
    <>
      <div className="badge-wrapper" style={{marginBottom: '12px'}}>
        <div className="badge">
          <div className="txt-wrapper">
            <div className="txt-1"  style={{
              whiteSpace: 'normal',    
              wordBreak: 'break-word', 
              overflowWrap: 'break-word'
            }}>
              {elements}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};