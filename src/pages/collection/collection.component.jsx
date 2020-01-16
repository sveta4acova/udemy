import React, {useContext} from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context';
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { items, title } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );

  // //без хука
  // return (
  //   <CollectionsContext.Consumer>
  //     {collections => {
  //       const collection = collections[match.params.collectionId];
  //       const { items, title } = collection;
  //
  //       return (
  //         <div className="collection-page">
  //           <h2 className="title">{title}</h2>
  //           <div className="items">
  //             {items.map(item => <CollectionItem key={item.id} item={item} />)}
  //           </div>
  //         </div>
  //       );
  //     }}
  //   </CollectionsContext.Consumer>
  // );
};

export default CollectionPage;
