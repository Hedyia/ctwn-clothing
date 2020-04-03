import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopData } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: state => selectShopData(state)
});
export default connect(mapStateToProps)(ShopPage);
