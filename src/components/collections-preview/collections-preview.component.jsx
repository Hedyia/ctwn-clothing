import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";

const CollectionsPreview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: (state) => selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionsPreview);
