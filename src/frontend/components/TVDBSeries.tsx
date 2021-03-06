import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'art'
    'title'
    'add-button';
  grid-template-rows: 6fr 1fr 1fr;
  row-gap: 8px;
`;

const Title = styled.span`
  grid-area: title;
  margin: 0;
  color: #262626;
  font-size: 0.9em;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  grid-area: art;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: #888;
  object-fit: cover;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.2);
`;

const AddButton = styled.button`
  grid-area: add-button;
  font-size: 0.85em;
`;

const Network = styled.span`
  position: absolute;
  bottom: 8px;
  left: 8px;
  padding: 5px;
  border-radius: 3px;
  background-color: #262626;
  color: white;
  font-size: 0.65em;
  font-weight: 900;
`;

interface Props {
  series: GraphQLTypes.TVDBSeries;
  onAddClicked(series: GraphQLTypes.TVDBSeries): void;
}

const TVDBSeries: React.FC<Props> = function (props) {
  const { series, onAddClicked } = props;

  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={`https://thetvdb.com/banners/${series.posterImages?.[0]?.thumbnail}`}
        />
        {series.network.length > 0 && <Network>{series.network}</Network>}
      </ImageContainer>
      <Title>{series.seriesName}</Title>
      <AddButton onClick={() => onAddClicked(series)}>Add to Library</AddButton>
    </Wrapper>
  );
};

export default React.memo(TVDBSeries);
